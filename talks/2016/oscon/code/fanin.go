func producer(ch chan int, d time.Duration) {
	for {
		ch <- i
		time.Sleep(d)
	}
}

func reader(out chan int) {
	for { <-out }
}

func main() {
	ch, out := make(chan int), make(chan int)
	go producer(ch, 100*time.Millisecond)
	go producer(ch, 300*time.Millisecond)
	go reader(out)
	for { out <- <-ch }
}
