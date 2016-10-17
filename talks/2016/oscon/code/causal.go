func handler(w http.ResponseWriter, req *http.Request) {
	buffered := bufio.NewWriter(w)
	w.Header().Set("Content-Length", "20000")
	for i := 0; i < 1000000; i++ {
		fmt.Fprintln(buffered, 42)
	}
	buffered.Flush()
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":5000", nil)
}
