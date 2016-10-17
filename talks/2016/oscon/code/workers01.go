func worker(tasks <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for {
		task, ok := <-tasks
		if !ok {
			return
		}
		d := time.Duration(task) * time.Millisecond
		time.Sleep(d)
		fmt.Println("processing task", task)
	}
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

func main() {
	var wg sync.WaitGroup
	wg.Add(36)
	go pool(&wg, 36)
	wg.Wait()
}
