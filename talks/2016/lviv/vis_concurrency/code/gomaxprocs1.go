package main

import (
	"fmt"
	"runtime"
	"time"
)

const workers = 24

func pool(in, out chan int) {
	for i := 0; i < workers; i++ {
		go worker(in, out)
	}
}

func print(out chan int) {
	for i := 0; i < 100; i++ {
		fmt.Println(<-out)
	}
}

func generate(in chan int) {
	for i := 0; i < 100; i++ {
		in <- i
	}
}

func worker(in, out chan int) {
	for {
		task := <-in
		// some heavy computation here
		for i, x := 0, 0; i < 1000000; i++ {
			x = x + (task*task)%(i+1)
		}
		out <- task + 1
	}
}

func main() {
	runtime.GOMAXPROCS(1)
	in := make(chan int)
	out := make(chan int)
	go pool(in, out)
	go generate(in)
	go print(out)
	time.Sleep(1 * time.Second)
}
