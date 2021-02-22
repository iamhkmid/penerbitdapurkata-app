import { MutableRefObject } from "react"

export const getSectionEl = (value: MutableRefObject<HTMLDivElement>) => {
    return { offsetTop: value.current.offsetTop, offsetHeight: value.current.offsetHeight }
}