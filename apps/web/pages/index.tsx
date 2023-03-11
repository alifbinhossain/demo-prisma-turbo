export default function Web() {
  const data = {
    email: 'test2@gmail.com',
    name: 'test2',
  };

  const handleCreate = async () => {
    const res = await fetch('/api/users/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
      <h1>Web</h1>
      <button onClick={handleCreate}>Create new user</button>
    </div>
  );
}
