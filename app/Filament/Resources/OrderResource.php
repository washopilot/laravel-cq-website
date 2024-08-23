<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Models\Order;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\SelectColumn;
use Filament\Resources\Pages\ManageRecords;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'Shop';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('tracking_id')->label('Tracking ID')->disabled(),
                TextInput::make('fullName')->label('Full Name')->disabled(),
                TextInput::make('phoneNumber')->label('Phone Number')->disabled(),
                TextInput::make('address')->label('Address')->disabled(),
                TextInput::make('cartItems')->label('Cart Items')->disabled(),
                TextInput::make('subtotal')->label('Subtotal')->disabled(),
                Select::make('status')
                    ->label('Status')
                    ->options([
                        0 => 'Registrado',
                        1 => 'Procesado',
                        2 => 'Entregado',
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('tracking_id')
                    ->label('Tracking ID')
                    ->sortable()
                    ->searchable()
                    ->url(fn(Order $record) => route('order.show', $record->tracking_id))
                    ->openUrlInNewTab(),

                TextColumn::make('fullName')
                    ->label('Full Name')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('phoneNumber')
                    ->label('Phone Number')
                    ->sortable(),

                TextColumn::make('address')
                    ->label('Address')
                    ->sortable(),

                TextColumn::make('cartItems')
                    ->label('Cart Items')
                    ->limit(20),

                TextColumn::make('subtotal')
                    ->label('Subtotal')
                    ->sortable(),

                SelectColumn::make('status')
                    ->label('Status')
                    ->options([
                        0 => 'Registrado',
                        1 => 'Procesado',
                        2 => 'Entregado',
                    ])
                    ->sortable(),
            ])
            ->filters([
                // Agrega filtros aquí si es necesario.
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageOrders::route('/'),
        ];
    }
}
