package main

import (
	"os"
	"runtime/trace"
	"time"
)

func leaker() {
	time.Sleep(10 * time.Millisecond)
}

func main() {
	trace.Start(os.Stderr)
	for i := 0; i < 360/10; i++ {
		go leaker()
	}
	time.Sleep(25 * time.Millisecond)
	trace.Stop()
}
