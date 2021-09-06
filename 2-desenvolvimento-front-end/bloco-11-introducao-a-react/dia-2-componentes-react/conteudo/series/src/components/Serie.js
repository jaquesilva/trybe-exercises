import React from 'react';

class Serie extends React.Component {
  render() {
    const { seriesInfo } = this.props;

    return ( // tudo que está dentro do return é o que vamos renderizar
    <section className="serie-card">
      <h1>{ seriesInfo.name }</h1>
      <p>Genero: { seriesInfo.genre }</p>
      <img src={ seriesInfo.image } alt={seriesInfo.name} />
    </section>
    )
  }
}

export default Serie;