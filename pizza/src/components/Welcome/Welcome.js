import React from 'react'
import pizzaImg from '../../img/pizza.jpg'
import { Card, Image } from 'react-bootstrap'

export const Welcome = () => {
  return (
    <Card >
      <Card.Body>
        <Card.Title> <h2> Sin City Slice </h2> </Card.Title>
        <Card.Text> People disappoint, but pizza never does ッ </Card.Text>
        <Image src={pizzaImg} alt="Pizza" fluid />
        <Card.Text className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum ut ante nec fringilla. In pharetra pretium pharetra. Vestibulum convallis rutrum libero, sit amet fermentum orci mattis et. Etiam id diam quis justo vestibulum fringilla. Mauris sit amet magna laoreet, ornare sapien et, rutrum tortor. Nulla nibh felis, mattis sed ex sit amet, vestibulum semper ligula. Mauris sodales et mauris sit amet hendrerit. Ut orci odio, ultrices tempus magna sed, commodo rhoncus orci. Nam suscipit nisl vitae nunc feugiat interdum. Quisque nec nibh non lacus commodo congue vel ac lectus. Cras blandit dictum nisi ac blandit.

          Quisque at mauris in diam mattis posuere et vitae quam. Vestibulum accumsan, est eu porta convallis, augue nisl dictum ipsum, eget rutrum sem nulla et ex. Mauris in aliquet lectus, vitae iaculis lacus. Curabitur a lacinia lorem. Aliquam maximus est ac lorem pharetra, eget rutrum diam volutpat. Nulla sit amet blandit felis. Sed eleifend efficitur urna, non tristique justo semper non. Morbi fermentum sed quam ut sollicitudin. Proin vitae ligula mauris. Sed tempus arcu eu ultricies congue. Pellentesque id lectus mi. Nunc non dui blandit, rhoncus leo a, consequat quam.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
