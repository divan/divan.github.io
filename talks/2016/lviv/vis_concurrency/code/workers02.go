const (
	WORKERS    = 5
	SUBWORKERS = 3
	TASKS      = 20
	SUBTASKS   = 10
)

func subworker(subtasks chan int) {
	for {
		task, ok := <-subtasks
		if !ok {
			return
		}
		time.Sleep(time.Duration(task) * time.Millisecond)
	}
}

func worker(tasks <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for {
		task, ok := <-tasks
		if !ok {
			return
		}

		subtasks := make(chan int)
		for i := 0; i < SUBWORKERS; i++ {
			go subworker(subtasks)
		}
		for i := 0; i < SUBTASKS; i++ {
			task1 := task * i
			subtasks <- task1
		}
		close(subtasks)
	}
}

func pool(wg *sync.WaitGroup, n int) {
}

func main() {
	var wg sync.WaitGroup
	wg.Add(WORKERS)
	tasks := make(chan int)

	//for i := 0; i < n; i++ {
	go worker(tasks, &wg)
	go worker1(tasks, &wg)
	go worker2(tasks, &wg)
	go worker3(tasks, &wg)
	go worker4(tasks, &wg)
	//}

	for i := 0; i < TASKS; i++ {
		tasks <- i
	}

	close(tasks)
	wg.Wait()
}

func subworker1(subtasks1 chan int) {
	for {
		task, ok := <-subtasks1
		if !ok {
			return
		}
		time.Sleep(time.Duration(task) * time.Millisecond)
	}
}

func worker1(tasks <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for {
		task, ok := <-tasks
		if !ok {
			return
		}

		subtasks1 := make(chan int)
		for i := 0; i < SUBWORKERS; i++ {
			go subworker1(subtasks1)
		}
		for i := 0; i < SUBTASKS; i++ {
			task1 := task * i
			subtasks1 <- task1
		}
		close(subtasks1)
	}
}
func subworker2(subtasks2 chan int) {
	for {
		task, ok := <-subtasks2
		if !ok {
			return
		}
		time.Sleep(time.Duration(task) * time.Millisecond)
	}
}

func worker2(tasks <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for {
		task, ok := <-tasks
		if !ok {
			return
		}

		subtasks2 := make(chan int)
		for i := 0; i < SUBWORKERS; i++ {
			go subworker2(subtasks2)
		}
		for i := 0; i < SUBTASKS; i++ {
			task1 := task * i
			subtasks2 <- task1
		}
		close(subtasks2)
	}
}

func subworker3(subtasks3 chan int) {
	for {
		task, ok := <-subtasks3
		if !ok {
			return
		}
		time.Sleep(time.Duration(task) * time.Millisecond)
	}
}

func worker3(tasks <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for {
		task, ok := <-tasks
		if !ok {
			return
		}

		subtasks3 := make(chan int)
		for i := 0; i < SUBWORKERS; i++ {
			go subworker3(subtasks3)
		}
		for i := 0; i < SUBTASKS; i++ {
			task1 := task * i
			subtasks3 <- task1
		}
		close(subtasks3)
	}
}

func subworker4(subtasks4 chan int) {
	for {
		task, ok := <-subtasks4
		if !ok {
			return
		}
		time.Sleep(time.Duration(task) * time.Millisecond)
	}
}

func worker4(tasks <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for {
		task, ok := <-tasks
		if !ok {
			return
		}

		subtasks4 := make(chan int)
		for i := 0; i < SUBWORKERS; i++ {
			go subworker4(subtasks4)
		}
		for i := 0; i < SUBTASKS; i++ {
			task1 := task * i
			subtasks4 <- task1
		}
		close(subtasks4)
	}
}
