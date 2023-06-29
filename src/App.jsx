import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const App = () => {

    const users = [
        {
            username: 'midudev',
            name: 'Miguel Ángel',
            isFollowing: true
        },
        {
            username: 'pheralb',
            name: 'Pablo',
            isFollowing: false
        },
        {
            username: 'TMChein',
            name: 'Tomas',
            isFollowing: true
        },
    ]

  return (
    <section className="App">
        {
            users.map((user) => {
                const { username, isFollowing, name } = user
                return (
                    <TwitterFollowCard
                        key={username}
                        username={username}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
    </section>
  )
}

export default App