<template>
    <div class="container py-5">
        <h2 class="text-center mb-4">Yap Referral Codes</h2>

        <!-- Bootstrap Alert -->
        <div v-if="showAlert" class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Copied!</strong> {{ copiedText }} has been copied to clipboard.
            <button type="button" class="btn-close" @click="showAlert = false"></button>
        </div>

        <div class="row">
            <div v-for="(referral, index) in referrals" :key="referral.id"
                class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4 fade-in"
                :style="{ animationDelay: `${index * 0.1}s` }">
                <div class="card text-center border-0 hover-card">
                    <img :src="getImage(referral.image)" class="card-img-top img-fluid fixed-image" alt="App Logo" />
                    <div class="card-body text-start">
                        <h5 class="card-title text-truncate" style="max-width: 100%;">
                            <a :href="getAppLink(referral)" target="_blank" class="text-decoration-none">
                                {{ referral.appName }}
                            </a>
                        </h5>
                        <p class="card-text text-muted">{{ referral.code }}</p>
                        <button class="btn btn-primary btn-sm hover-button" @click="copyToClipboard(referral.code)">
                            Copy Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { referrals as referralData } from "../data/referrals";

const referrals = ref(referralData); // Assign imported data

// Import all images from assets/logos dynamically
const images = import.meta.glob("../assets/logos/*.{png,jpg,jpeg}", { eager: true });

// Default placeholder image
import DefaultLogo from "../assets/logos/default.jpg";

// Function to get image path
const getImage = (imageName: string | undefined) => {
    if (!imageName) return DefaultLogo;
    return (images[`../assets/logos/${imageName}`] as { default: string })?.default || DefaultLogo;
};

// State for Bootstrap Alert
const showAlert = ref(false);
const copiedText = ref("");

// Copy function with Bootstrap alert
const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
        copiedText.value = code;
        showAlert.value = true;
        setTimeout(() => {
            showAlert.value = false;
        }, 3000);
    });
};

// Function to get app links
const getAppLink = (referral: any): string => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return referral.iosUrl || referral.webUrl || "https://www.google.com";
    } else if (/Android/i.test(userAgent)) {
        return referral.androidUrl || referral.webUrl || "https://www.google.com";
    }
    return referral.webUrl || "https://www.google.com";
};
</script>

<style scoped>
</style>
