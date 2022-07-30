import React from 'react'

export default function ContainerCategory(props) {
    const {name} = props;
  return (
    <div className="rounded-lg py-2 bg-secondary mt-5 mx-3">
        <h3 className="px-3 text-sm font-roboto font-bold text-primary">{name}</h3>
    </div>
  )
}
