import { motion } from 'framer-motion';
import { MoveRight, PhoneCall } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Button } from './button';

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ['amazing', 'new', 'wonderful', 'beautiful', 'smart'],
        [],
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-regular max-w-2xl text-center text-5xl tracking-tighter md:text-7xl">
                            <span className="text-spektr-cyan-50">
                                This is something
                            </span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold"
                                        initial={{ opacity: 0, y: '-100' }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 50,
                                        }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                      y: 0,
                                                      opacity: 1,
                                                  }
                                                : {
                                                      y:
                                                          titleNumber > index
                                                              ? -150
                                                              : 150,
                                                      opacity: 0,
                                                  }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
                            Managing a small business today is already tough.
                            Avoid further complications by ditching outdated,
                            tedious trade methods. Our goal is to streamline SMB
                            trade, making it easier and faster than ever.
                        </p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Button size="lg" className="gap-4" variant="outline">
                            Jump on a call <PhoneCall className="h-4 w-4" />
                        </Button>
                        <Button size="lg" className="gap-4">
                            Sign up here <MoveRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Hero };
