import React from "react";
import { Button } from "./ui/button";
import { ExternalLink, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SM = () => {
    const t = useTranslations("SM");
    return (
        <motion.div
            className="container mx-auto py-8 px-8 lg:px-16 flex flex-col items-center md:justify-start md:items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <motion.div
                className="flex space-x-6"
                variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: (i) => ({
                        opacity: 1,
                        x: 0,
                        transition: {
                            delay: i * 0.1,
                        },
                    }),
                }}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    custom={0}
                    variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <Link
                        href="https://www.instagram.com/ucodebyus"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                        >
                            <Instagram className="mr-2 h-5 w-5" />
                            {t("follow")}
                        </Button>
                    </Link>
                </motion.div>
                <motion.div
                    custom={1}
                    variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <Link
                        href="https://www.ucodebyus.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                        >
                            UCODEBYUS
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SM;
