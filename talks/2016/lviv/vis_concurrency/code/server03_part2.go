func worker(wch chan int, results chan int) {
	for {
		data := <-wch
		results <- data
	}
}

func parse(results chan int) {
	for { <-results }
}

func pool(ch chan string, n int) {
	wch := make(chan int)
	results := make(chan int)
	for i := 0; i < n; i++ {
		go worker(wch, results)
	}
	go parse(results)
	for {
		addr := <-ch
		wch <- 42*len(addr)
	}
}
