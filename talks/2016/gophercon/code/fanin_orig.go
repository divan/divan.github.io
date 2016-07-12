package main

import (
	"fmt"
	"time"
)

func producer1(ch chan int) {
	var i int
	for {
		time.Sleep(100 * time.Millisecond)
		ch <- i
		i++
	}
}

func producer2(ch chan int) {
	var i int
	for {
		time.Sleep(300 * time.Millisecond)
		ch <- i
		i++
	}
}

func reader(out chan int) {
	for {
		x := <-out
		fmt.Println(x)
	}
}

func main() {
	ch := make(chan int)
	go producer1(ch)
	go producer2(ch)
	out := make(chan int)
	go reader(out)
	for {
		i := <-ch
		out <- i
		if i == 20 {
			return
		}
	}
}
