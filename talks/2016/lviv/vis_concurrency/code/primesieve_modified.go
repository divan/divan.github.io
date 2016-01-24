package main

import "fmt"
import "time"

func Generate(ch chan<- int) {
	for i := 2; ; i++ {
		time.Sleep(100 * time.Millisecond)
		ch <- i
	}
}

func Filter(ch <-chan int, out chan<- int, prime int) {
	for {
		i := <-ch
		if i%prime != 0 {
			out <- i
		}
	}
}

func Filter1(out <-chan int, out1 chan<- int, prime int) {
	for {
		i := <-out
		if i%prime != 0 {
			out1 <- i
		}
	}
}

func Filter2(out1 <-chan int, out2 chan<- int, prime int) {
	for {
		i := <-out1
		if i%prime != 0 {
			out2 <- i
		}
	}
}

func Filter3(out2 <-chan int, out3 chan<- int, prime int) {
	for {
		i := <-out2
		if i%prime != 0 {
			out3 <- i
		}
	}
}

func Filter4(out3 <-chan int, out4 chan<- int, prime int) {
	for {
		i := <-out3
		if i%prime != 0 {
			out4 <- i
		}
	}
}

func Filter5(out4 <-chan int, out5 chan<- int, prime int) {
	for {
		i := <-out4
		if i%prime != 0 {
			out5 <- i
		}
	}
}

func Filter6(out5 <-chan int, out6 chan<- int, prime int) {
	for {
		i := <-out5
		if i%prime != 0 {
			out6 <- i
		}
	}
}

func Filter7(out6 <-chan int, out7 chan<- int, prime int) {
	for {
		i := <-out6
		if i%prime != 0 {
			out7 <- i
		}
	}
}

func Filter8(out7 <-chan int, out8 chan<- int, prime int) {
	for {
		i := <-out7
		if i%prime != 0 {
			out8 <- i
		}
	}
}

func Filter9(out8 <-chan int, out9 chan<- int, prime int) {
	for {
		i := <-out8
		if i%prime != 0 {
			out9 <- i
		}
	}
}

func main() {
	ch := make(chan int)
	go Generate(ch)

	prime := <-ch
	out := make(chan int)
	go Filter(ch, out, prime)
	prime = <-out
	fmt.Println(prime)
	out1 := make(chan int)
	go Filter1(out, out1, prime)
	prime = <-out1
	fmt.Println(prime)
	out2 := make(chan int)
	go Filter2(out1, out2, prime)
	prime = <-out2
	fmt.Println(prime)
	out3 := make(chan int)
	go Filter3(out2, out3, prime)
	prime = <-out3
	fmt.Println(prime)
	out4 := make(chan int)
	go Filter4(out3, out4, prime)
	prime = <-out4
	fmt.Println(prime)

	out5 := make(chan int)
	go Filter5(out4, out5, prime)
	prime = <-out5
	fmt.Println(prime)

	out6 := make(chan int)
	go Filter6(out5, out6, prime)
	prime = <-out6
	fmt.Println(prime)

	out7 := make(chan int)
	go Filter7(out6, out7, prime)
	prime = <-out7
	fmt.Println(prime)

	out8 := make(chan int)
	go Filter8(out7, out8, prime)
	prime = <-out8
	fmt.Println(prime)

	out9 := make(chan int)
	go Filter9(out8, out9, prime)
	prime = <-out9
	fmt.Println(prime)
}
