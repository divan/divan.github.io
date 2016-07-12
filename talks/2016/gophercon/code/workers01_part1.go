func main() {
	var wg sync.WaitGroup
	wg.Add(36)
	go pool(&wg, 36)
	wg.Wait()
}

func pool(wg *sync.WaitGroup, n int) {
	tasks := make(chan int)
	for i := 0; i < n; i++ {
		go worker(tasks, wg)
	}
	for i := 0; i < 50; i++ {
		tasks <- i
	}
	close(tasks)
}
