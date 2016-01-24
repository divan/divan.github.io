func producer(ch chan int, d time.Duration) {
	var i int
	for {
		ch <- i
		i++
		time.Sleep(d)
	}
}

func reader(out chan int) {
	for x := range out {
		fmt.Println(x)
	}
}

func main() {
	ch := make(chan int)
	go producer(ch, 100 * time.Millisecond)
	go producer(ch, 250 * time.Millisecond)
	out := make(chan int)
	go reader(out)
	for i := range ch {
		out <- i
		if i == 20 {
			return
		}
	}
}
