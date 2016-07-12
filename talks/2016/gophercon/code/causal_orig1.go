package main

import (
	"bufio"
	"fmt"
	"net/http"
	"os"
	"runtime/trace"
	"time"
)

func handler(w http.ResponseWriter, req *http.Request) {
	buffered := bufio.NewWriter(w)
	w.Header().Set("Content-Length", "20000")
	for i := 0; i < 100000; i++ {
		fmt.Fprintln(buffered, 42)
	}
	buffered.Flush()
}

func main() {
	trace.Start(os.Stderr)
	http.HandleFunc("/", handler)
	go http.ListenAndServe(":5000", nil)
	time.Sleep(1 * time.Second)
	trace.Stop()
}
