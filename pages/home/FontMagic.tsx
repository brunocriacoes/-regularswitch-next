import { useEffect, useRef, useState } from "react";

export default function FontMagic () {
    const [cursorX, setCursorX] = useState(0)
    const [largura, setLargura] = useState(0)
    const contentText = useRef<HTMLDivElement>(null)
    function mouseMove($e: MouseEvent) {
        setCursorX($e?.clientX)
    }
    // function TouchMove($e: TouchEvent) {
    //     setCursorX($e?.changedTouches[0].clientX)
    // }
    function escala() {
        let meio = largura / 2
        if(cursorX > meio) {
            return largura - cursorX
        }
        return cursorX
    }
    const optionTouch = {
        passive: false
    }
    useEffect(() => {
        setLargura(contentText.current?.clientWidth || 0)
        contentText.current?.addEventListener("mousemove", mouseMove);
        // contentText.current?.addEventListener("touchmove", TouchMove, optionTouch);
    }, [])

    return (
        <div
            className="text-[200px] text-white text-center uppercase font-home py-8"
            ref={contentText}
        >
            <span className="text-[20px]">
                <span>
                    - x: {cursorX}
                    - L:{largura} 
                    - S: {escala()}
                    - wdth: {escala()/20}
                    </span>
            </span>
            <div className="flex justify-center">
                {'regular'.split('').map(letra =>
                    <span
                        key={'p_1_' + letra}
                        style={{
                            textRendering: 'optimizeSpeed',
                            fontSize: 400,
                            lineHeight: '0.8em',
                            fontVariationSettings: `"wght" ${escala()}, "wdth" ${escala()/20}, "ital" 0`                            
                        }}
                    >
                        {letra}
                    </span>
                )}
            </div>
            <div className="flex justify-center">
                {'switch'.split('').map(letra =>
                    <span
                        key={'p_1_' + letra}
                        style={{
                            textRendering: 'optimizeSpeed',
                            fontSize: 400,
                            lineHeight: '0.8em',
                            fontVariationSettings: `"wght" ${escala()}, "wdth" 5, "ital" 0`                            
                        }}
                    >
                        {letra}
                    </span>
                )}
            </div>
            
        </div>
    )

}



