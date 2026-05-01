function TeamRoles() {
  const team = [
    { name: 'Gabby', role: 'Organizing and structuring the overall project', emoji: '📋' },
    { name: 'Michelle', role: 'Visual design, map layout, and slides', emoji: '🎨' },
    { name: 'Jenny', role: 'Research and cultural background storytelling', emoji: '📝' },
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
