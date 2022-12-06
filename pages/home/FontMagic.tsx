import { useEffect, useRef, useState } from "react";

export default function () {

    var maxDist
    const mouse = { x: 0, y: 0 }
    const [cursor, setCursor] = useState({ x: 0, y: 0 })

    const contentText = useRef<HTMLDivElement>(null)

    function mouseMove($e: MouseEvent) {
        setCursor({
            x: $e?.clientX,
            y: $e?.clientY,
        })
    }
    function TouchMove($e: TouchEvent) {
        setCursor({
            x: $e?.changedTouches[0].clientX,
            y: $e?.changedTouches[0].clientY,
        })
    }

    const optionTouch = {
        passive: false
    }

    useEffect(() => {
        setCursor({
            x: contentText.current?.clientWidth || 0,
            y: contentText.current?.clientHeight || 0
        })
        contentText.current?.addEventListener("mousemove", mouseMove);
        contentText.current?.addEventListener("touchmove", TouchMove, optionTouch);
    }, [])

    return (
        <div
            className="text-[200px] text-white text-center uppercase font-hk"
            ref={contentText}
        >
            <div className="flex justify-center">
                {'regular'.split('').map(letra =>
                    <span
                        key={'p_1_' + letra}
                        style={{
                            textRendering: 'optimizeSpeed',
                            width: 100,
                            userSelect: 'none',
                            margin: '0 auto',
                            textTransform: 'uppercase',
                            fontSize: 400,
                            color: '#FFF',
                            lineHeight: '0.8em',
                            fontWeight: 50,
                            opacity: 1,
                            fontVariationSettings: `"wght" 100, "wdth" 5, "ital" 0`
                        }}
                    >
                        {letra}
                    </span>
                )}
            </div>
            <span className="block"></span>
            <span>switch</span>
        </div>
    )

}



