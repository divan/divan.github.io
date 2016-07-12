func generate(in chan int) {
	for i := 0; i < 100; i++ {
		in <- i
	}
}

func print(out chan int) {
	for i := 0; i < 100; i++ {
		fmt.Println(<-out)
	}
}

func main() {
	runtime.GOMAXPROCS(1)

	in := make(chan int)
	out := make(chan int)
	go pool(in, out)
	go generate(in)
	go print(out)

	time.Sleep(1 * time.Second)
}
