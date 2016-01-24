package main

import (
	"fmt"
	"net"
	"time"
)

func main() {
	l, err := net.Listen("tcp", ":5000")
	if err != nil {
		panic(err)
	}

	ch := make(chan string)

	go logger(ch)
	go server(l, ch)

	time.Sleep(10 * time.Second)
}
