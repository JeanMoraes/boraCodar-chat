<script setup lang="ts">
    import closeIcon from '../assets/icons/close-icon.svg'
</script>

<template>
    <header>
        <div class="avatar">
            <img alt="Profile Name..." src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
        </div>
        <div class="profile-info">
            <p>Jean Moraes</p>
            <span>Online</span>
        </div>
        <div class="close-button">
            <button type="button">
                <img :src="closeIcon" alt="Botão de fechar"/>
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        display: flex;
        align-items: center;
        gap: 1rem;

        .avatar > img {
            width: 3rem;
            height: 3rem;
            border-radius: 999px;
        }

        .profile-info {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            flex: 1;

            p {
                font-family: Roboto, sans-serif;
                font-size: 1rem;
                font-weight: bold;
                color: var(--light-text);
                line-height: 125%;
            }

            span {
                font-family: Roboto, sans-serif;
                font-size: 0.75rem;
                color: var(--success);
            }
        }

        .close-button {
            button {
                background: none;
                border: none;
                width: 1.25rem;
                height: 1.25rem;
                color: var(--light-text);
            }
        }
    }

</style>