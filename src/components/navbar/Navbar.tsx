import React from 'react';

export const Navbar = () => {
    return (
        <nav>
            <div>
                <span>
                    Dragons Investments
                    <span role={'img'} aria-label={'emoji'}>
                        💻
                    </span>
                </span>
            </div>
            <button>Login</button>
        </nav>
    );
};
