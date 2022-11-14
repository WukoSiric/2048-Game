import { Direction } from "../types/Direction";

export function trigger_keypress(direction: Direction): KeyboardEvent {
    console.log(direction)
    if (direction === Direction.Up) {
        return new KeyboardEvent('key', {key: 'ArrowUp'})
    } else if (direction === Direction.Down) {
        return new KeyboardEvent('key', {key: 'ArrowDown'})
    } else if (direction === Direction.Left) {
        return new KeyboardEvent('key', {key: 'ArrowLeft'})
    } else if (direction === Direction.Right) {
        return new KeyboardEvent('key', {key: 'ArrowRight'})
    }
    return new KeyboardEvent('key', {key: 'ArrowUp'})
}