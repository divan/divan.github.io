func main() {
	l, _ := net.Listen("tcp", ":5000")

	ch := make(chan string)

	go logger(ch)
	go server(l, ch)

	select{}
}
