function TeamRoles() {
  const team = [
    { name: 'Gabby', role: 'Storytelling and cultural background research', emoji: '📖' },
    { name: 'Michelle', role: 'Map location picking and curation', emoji: '📍' },
    { name: 'Jenny', role: 'UI/UX frontend, backend development, and web engineering', emoji: '💻' },
  ]

  return (
    <section className="team-panel">
      <div className="section-header">
        <span className="section-marker">Team</span>
        <h2>Project roles in the Girlhood NYC crew</h2>
      </div>
      <div className="team-grid">
        {team.map((member) => (
          <article key={member.name} className="team-card">
            <div className="team-avatar">{member.emoji}</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamRoles
