func handler(c net.Conn, ch chan string) {
	ch <- 11 // something
	c.Write([]byte("ok"))
	c.Close()
}

func logger(ch chan string) {
	for { fmt.Println(<-ch) }
}

func server(l net.Listener, ch chan string) {
	for {
		c, err := l.Accept()
		if err != nil {
			continue
		}
		go handler(c, ch)
	}
}
