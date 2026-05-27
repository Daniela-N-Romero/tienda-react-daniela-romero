import React from 'react';

export default function Footer() {
  const teamMembers = [
    { id: 1, name: "Ana Laura Stigliano", role: "Gerente de Ventas" },
    { id: 2, name: "Carlos Di Stefano", role: "Recursos Humanos" },
    { id: 3, name: "Lucía Fernández", role: "Atención al consumidor" }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="empresa-info">
          <h3>Mi Tienda Online</h3>
          <p>Dirección: Av. Mitre 765, Berazategui</p>
          <p>Contacto: soporte@mitienda.com</p>
        </div>
        <hr />

        <div className="team-container">
          {teamMembers.map((member) => (
            <div key={member.id} className="member-card">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}