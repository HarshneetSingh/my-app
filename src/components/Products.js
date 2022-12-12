import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
function Products() {
  return (
    <>
      <div>
        <h4> absolute</h4>

        <Link to="/featured">Featured</Link>
        <Link to="/top">Top</Link>
        <Link to="/Latest">Latest</Link>

      </div>
      <div>
        <h4> relative</h4>
        <Link to="featured">Featured</Link>
        <Link to="top">Top</Link>
        <Link to="Latest">Latest</Link>
      </div>
      <Outlet />
    </>
  )
}
function ParamHook() {
  const params = useParams()
  return <>
    <div> {params.rndm}</div>
  </>
}
export { Products, ParamHook }