function throttle (callback, delay) {
    let
        isThrottled = false,
        savedArgs,
        savedThis

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments
            savedThis = this
            return
        }
        
        callback.apply(this, arguments)
        isThrottled = true
        
        setTimeout(() => {
            isThrottled = false

            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }
        }, delay)
    }

    return wrapper
}
  
export default throttle