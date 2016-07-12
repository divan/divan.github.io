package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"net/http"
	"os"
	"runtime/trace"
	"time"
)

func handler(w http.ResponseWriter, req *http.Request) {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	buffered := bufio.NewWriter(w)
	w.Header().Set("Content-Length", "20000")
	for i := 0; i < 10000; i++ {
		fmt.Fprintln(buffered, r.Int63n(10))
	}
	buffered.Flush()
}

func main() {
	trace.Start(os.Stderr)
	http.HandleFunc("/", handler)
	go http.ListenAndServe(":5000", nil)
	time.Sleep(100 * time.Millisecond)
	trace.Stop()
}
