import React from 'react';
import { HobbyCard } from './HobbyCard';

export default {
    component: HobbyCard,
    title: 'HobbyCard',
};

const Template = args => (
    <div>
        <HobbyCard {...args}>   
        </HobbyCard>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Test Title',
    imageUrl: '/burger.jpg',
    children: [
        <p>Lorem ipsum dolor sit amet. Ad excepturi voluptatem sed recusandae laudantium ad accusantium neque. Aut repellendus totam ad provident asperiores aut ipsum excepturi aut autem omnis!</p>,
        <p>Sit natus repudiandae quo aspernatur internos ea obcaecati sunt eos minus galisum aut molestiae necessitatibus eum provident enim sed dolorum veritatis. Qui reprehenderit voluptas ab tempora laborum quo dolor accusantium et asperiores quam et libero autem non molestias possimus? Et iste earum ut assumenda facere in deserunt pariatur At neque dolores et sunt quia.</p>,
        <p>Aut aliquam cupiditate ut autem earum ut distinctio dolor est aspernatur consequatur cum fugit neque ad eaque molestias! Id possimus labore ut quia doloribus est porro laborum et voluptas suscipit veniam vel officia harum quo voluptas tenetur. Cum consequatur quia et recusandae accusantium et laboriosam voluptatem aut dignissimos molestias ab obcaecati unde est aliquam voluptatem. Ex incidunt voluptatem et soluta sapiente At soluta nihil est ullam veniam.</p>
    ]
}

export const LessText = Template.bind({});
LessText.args = {
    ...Default.args,
    children: <p>Lorem ipsum dolor sit amet. Ad excepturi voluptatem sed recusandae laudantium ad accusantium neque. Aut repellendus totam ad provident asperiores aut ipsum excepturi aut autem omnis!</p>
}

export const DifferentImage = Template.bind({});
DifferentImage.args = {
    ...Default.args,
    imageUrl: '/hiking.jpg',
}