package main

import (
	"os"
	"runtime/trace"
	"time"
)

func leaker2() {
	time.Sleep(5 * time.Millisecond)
}

func leaker() {
	for i := 0; i < 360/36; i++ {
		go leaker2()
	}
	time.Sleep(10 * time.Millisecond)
}

func main() {
	trace.Start(os.Stderr)
	for i := 0; i < 360/36; i++ {
		go leaker()
	}
	time.Sleep(20 * time.Millisecond)
	for i := 0; i < 360/36; i++ {
		go leaker()
	}
	time.Sleep(20 * time.Millisecond)
	for i := 0; i < 360/36; i++ {
		go leaker()
	}
	time.Sleep(20 * time.Millisecond)
	trace.Stop()
}
