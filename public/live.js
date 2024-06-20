const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
const room = client.channel("supabase_realtime");
function messageReceived(payload) {
  console.log(payload);
}

room.send({
  type: "broadcast",

  event: "test",
  payload: { message: "hello, world" },
});

room
  .on('presence', { event: 'sync' }, () => {
    const newState = room.presenceState()
    console.log('sync', newState)
  })
  .on('presence', { event: 'join' }, ({ key, newPresences }) => {
    console.log('join', key, newPresences)
  })
  .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
    console.log('leave', key, leftPresences)
  })
  .subscribe()

const { cells } = await client
  .from('Cell')
  .select()

const {error} = await client
  .from('Cell')
  .insert([
    {id:2,name:"gold",position:[1,0],Action:"",Connections:[1]}]
  )
  .select()
  console.log(error)
console.log(cells)
