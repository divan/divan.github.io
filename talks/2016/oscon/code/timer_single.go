package main

import "time"

func main() {
	ch := time.Tick(100 * time.Millisecond)
	<-ch

	ch = time.After(1 * time.Second)
	<-ch

	i := 200 * time.Millisecond
	ch = time.AfterFunc(i, func() {
		println("Ran after 1 sec")
	})
	<-ch
}
