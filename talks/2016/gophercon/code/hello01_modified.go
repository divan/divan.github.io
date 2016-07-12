...
func main() {
	_encode(_cmd{Name: getGID("main"), Command: "create goroutine"})
	defer _encode(_cmd{Name: getGID("main"), Command: "stop goroutine"})
	ch := make(chan int)
	go func() {
		_encode(_cmd{Parent: "main", Name: getGID("go"), Command: "create goroutine"})
		defer _encode(_cmd{Name: getGID("go"), Command: "stop goroutine"})
		_encode(_cmd{From: getGID("go"), Channel: "ch", Value: 42, Command: "start send"})
		ch <- 42
	}()
	_encode(_cmd{To: getGID("main"), Channel: "ch", Value: <-ch, Command: "start recv"})

}

func _encode(v _cmd) {
	var out []byte
	v.Time = time.Now().UnixNano()
	out, _ = json.Marshal(v)
	fmt.Fprintln(os.Stdout, "TRACE:", string(out))
}
...
