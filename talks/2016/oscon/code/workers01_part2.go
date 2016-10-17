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
