import React from 'react'

export default function ContainerCategory(props) {
    const {name} = props;
  return (
    <div className="rounded-lg py-2 bg-secondary mt-5 mx-3">
        <h2 className="px-3 text-lg font-bold text-primary">{name}</h2>
    </div>
  )
}
