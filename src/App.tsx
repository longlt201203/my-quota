import Button from "./components/Button"
import QuoteBlock from "./components/QuoteBlock"
import Table from "./components/Table"
import Typography from "./components/Typography"
import Icons, {  } from "./components/Icon";

const mockData = [
  {
    id: 1,
    author: "Le Thanh Long",
    content: "Họ cười tôi vì tôi không giống họ. Tôi cười họ vì họ không giống tôi."
  },
  {
    id: 2,
    author: "Le Thanh Long",
    content: "Họ cười tôi vì tôi không giống họ. Tôi cười họ vì họ không giống tôi."
  }
]

function App() {
  
  return (
    <>
      <Typography.Display>My Quota</Typography.Display>
      <QuoteBlock quote="Họ cười tôi vì tôi không giống họ. Tôi cười họ vì họ không giống tôi." author="Lê Thành Long" />
      <Button>Randomize</Button>
      <Button variant="secondary">Settings</Button>
      <Table.Container>
        <Table.Row header>
          <Table.Item>#</Table.Item>
          <Table.Item>Author</Table.Item>
          <Table.Item>Content</Table.Item>
          <Table.Item>Actions</Table.Item>
        </Table.Row>
        {mockData.map(item => (
          <Table.Row key={item.id}>
            <Table.Item>{item.id}</Table.Item>
            <Table.Item>{item.author}</Table.Item>
            <Table.Item>{item.content}</Table.Item>
            <Table.Item>
              <Button><Icons.EditIcon variant="primaryText" /></Button>
              <Button variant="danger"><Icons.TrashCan variant="dangerText" /></Button>
            </Table.Item>
          </Table.Row>
        ))}
      </Table.Container>
    </>
  )
}

export default App
