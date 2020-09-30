import React from 'react';

interface ContainerProps {
    title: string;
}

export const Container: React.FC<ContainerProps> = ({children, title}) => {
    return (
        <main>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
        </main>
    );
};
