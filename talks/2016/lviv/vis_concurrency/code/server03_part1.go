func handler(c net.Conn, ch chan string) {
	ch <- c.RemoteAddr().String()
	time.Sleep(100 * time.Millisecond)
	c.Write([]byte("ok"))
	c.Close()
}

func main() {
	l, err := net.Listen("tcp", ":5000")
	if err != nil {
		panic(err)
	}
	ch := make(chan string)

	go pool(ch, 4)
	go server(l, ch)
	time.Sleep(2 * time.Second)
}
