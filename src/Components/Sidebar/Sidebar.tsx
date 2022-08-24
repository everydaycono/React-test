interface ISidebarProps {
  items: {
    name: string;
    href: string;
  }[]
}

const Sidebar = ({ items }: ISidebarProps) => {
  return (
    <div>
      {items.map(item => {
        return (<div key={item.href}>
          <a role="navigation" href={item.href}>{item.name}</a>
        </div>)
      })}
    </div>
  )
}

export default Sidebar