import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css';
import { Botoes } from "./Botoes";
import { Cards } from "./Cards";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Spinner, SpinnerGap } from "phosphor-react";

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        },
        fetchPolicy: "no-cache"
    })

    {/* Gambiarra da aula para não dar erro em lesson undefined */}
    if (!data || !data?.lesson) {
        return (
            <div className="flex-1 flex flex-col justify-center items-center gap-2 text-gray-400 bg-reactIcon bg-center bg-no-repeat bg-contain">
                <Spinner size={64}>
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="5s"
                        from="0 0 0"
                        to="360 0 0"
                        repeatCount="indefinite"
                    />
                </Spinner>
                <p className="text-lg">Carregando...</p>
            </div>
        )
    }    
    
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto mb-12">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-stretch">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 text-justify leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {/* Gambiarra da aula para não dar erro em teacher = undefined */}
                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img 
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL}
                                    alt="Avatar"
                                />

                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    
                    <div className="flex flex-col gap-4">
                        <Botoes variant='discord' />

                        <Botoes variant='desafio' />
                    </div>
                </div>

                <div className="gap-4 sm:gap-8 mt-16 sm:mt-20 grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2">
                    <Cards variant="material"/>
                    
                    <Cards variant="wallpapers"/>
                </div>
            </div>
        </div>
    )
}