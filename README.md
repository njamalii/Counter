# React + Vite
---
## Counter

This is a simple sample of counter.

The code is written once without using useCallback hook and once using useCallback hook.

The part of the code  without using useCallback hook is commented.

Without using useCallback:
(**This part is commented in the code**)

 	 	` // Without using Callback
    function minusBtn() {
    setNum(num - 1);
    }
    function addBtn() {
    setNum(num + 1);
    } `

  Using useCallback:
   	`///With using Callback
     const minusBtn = useCallback(() => {
      setNum(num - 1);
     }, [num]);
     const addBtn = useCallback(() => {
     setNum(num + 1);
      }, [num]`
