func handler(c net.Conn) {
	c.Write([]byte("ok"))
	c.Close()
}

func main() {
	l, err := net.Listen("tcp", ":5000")
	if err != nil {
		panic(err)
	}
	for {
		c, err := l.Accept()
		if err != nil {
			continue
		}
		go handler(c)
	}
}
