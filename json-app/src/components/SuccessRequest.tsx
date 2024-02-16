interface props {
  useJsonFetch: (url: string, options?: RequestInit | undefined) => any;
}

export default function SuccessRequest({ useJsonFetch }: props) {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

  return (
    <>
      <div className="result-data">
        <div className="data">data: {data}</div>
        <div className="loading">loading: {loading}</div>
        <div className="error">error: {error}</div>
      </div>
    </>
  );
}
