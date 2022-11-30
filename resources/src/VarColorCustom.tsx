import { FC, useCallback, useState } from 'react';
import { GithubPicker } from 'react-color';

import { IVarBaseInputProps, useVarUIValue, VarBase } from 'react-var-ui';

export interface IVarColorProps extends IVarBaseInputProps<string> {
    /**
     * Should allow picking alpha values?
     * If true, the result hex code will contain extra two characters representing the alpha value, from 00 to FF.
     */
}

/**
 * Color picker component. Returns and accepts values in form of hex color strings.
 */
export const VarColorCustom: FC<IVarColorProps> = ({ label, path, value, onChange, disabled, className }) => {
    const [currentValue, setCurrentValue] = useVarUIValue(path, value, onChange);

    const [show, setShow] = useState(false);
    const toggle = useCallback(() => setShow((show) => !show), [setShow]);
    const close = useCallback(() => setShow(false), [setShow]);

    return (
        <VarBase label={label} disabled={disabled} className={className}>
            <span>
                <span className="react-var-ui-color-value">{currentValue}</span>
                <div className="react-var-ui-color">
                    <div className="react-var-ui-color-swatch" onClick={toggle}>
                        <div
                            className="react-var-ui-color-color"
                            title="Color preview"
                            style={{ background: currentValue }}
                        />
                    </div>
                    {show ? (
                        <div className="react-var-ui-color-popover">
                            <div className="react-var-ui-color-cover" onClick={close} />
                            <GithubPicker
                                triangle="top-right"
                                styles={{
                                    default: {
                                        card: {
                                            top: '10em',
                                            right: '2em'
                                        }
                                    }
                                }}
                                width="5em"
                                color={currentValue}
                                onChange={(result) => setCurrentValue(result.hex)}
                            />
                        </div>
                    ) : null}
                </div>
            </span>
        </VarBase>
    );
};
