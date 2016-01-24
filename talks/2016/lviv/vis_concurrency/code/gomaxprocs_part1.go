const workers = 24

func pool(in, out chan int) {
	for i := 0; i < workers; i++ {
		go worker(in, out)
	}
}

func worker(in, out chan int) {
	for {
		task := <-in
		// heavy computation here
		out <- task + 1
	}
}
